import { get, omit } from 'lodash';
import User, { UserDocument } from './../model/user.model';
import {DocumentDefinition, FilterQuery, LeanDocument, UpdateQuery} from 'mongoose';
import config from 'config';
import { decode, sign } from '../utils/jwt.utils';
import Session, { SessionDocument } from '../model/session.model';

export async function createUser(input: DocumentDefinition<UserDocument>) {
    try {
        return await User.create(input);
    } catch(error: any) {
        throw new Error(error);
    }
}

export async function findUser(query: FilterQuery<UserDocument>) {
    return User.findOne(query).lean();
}

export async function validatePassword(
    {email, password}: {email: UserDocument["email"], password: string}) {
    const user: UserDocument | null = await User.findOne({email});
    if (!user)
        return false;
    const isValid = await user.comparePassword(password);
    if (!isValid)
        return false;
    
    return omit(user.toJSON(), "password");
}

export function createAccessToken({user, session}: {
    user: | Omit<UserDocument, "password"> | LeanDocument<Omit<UserDocument, "password">> ,
    session:
    // Allows a session object that has had the password omitted
    | Omit<SessionDocument, "password">
    // Allows a session object that has been found with .lean()
    | LeanDocument<Omit<SessionDocument, "password">>;
}) {
    const accessToken = sign(
        {...user, session: session._id},
        {expiresIn: config.get("accessTokenTtl")}
    );
    return accessToken;
}

export async function reIssueAccessToken({refreshToken}: {refreshToken: string}) {
    const {decoded} = decode(refreshToken);

    if (!decoded || !get(decoded, "_id")) return false;

    const session = await Session.findById(get(decoded, "_id"));
    if (!session || !session?.valid) return false;

    const user = await findUser({_id: session.user});
    if (!user) return false;

    const accessToken = createAccessToken({user, session});
    return accessToken;
}

export async function createSession(userId: string, userAgent: string) {
    const session = await Session.create({ user: userId, userAgent });

    return session.toJSON();
}

export async function updateSession(
    filterQuery: FilterQuery<SessionDocument>, 
    updateQuery: UpdateQuery<SessionDocument>) {
        return await Session.updateOne(filterQuery, updateQuery);
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
    return Session.find(query).lean();
}