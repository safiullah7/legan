export interface ITeam {
    team: ITeamMember[],
}
export interface ITeamMember {
    _id: string,
    name: string,
    imageUrl: string,
    title: string,
    description: string,
    createdAt: Date,
    updatedAt: Date,
    __v: number
}
export interface ITeamId {
    memberId: string,
}

export interface AddTeamMember {
    file: Blob | null,
    name: string,
    title: string,
    description: string
}