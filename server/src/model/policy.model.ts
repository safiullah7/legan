import mongoose from 'mongoose';
import { IPolicy } from '../types/policy.type';

const PolicyDetails = new mongoose.Schema({
    name: { type: String, required: true },
    effectiveDate: { type: Date, required: true },
    content: { type: String, required: true },
});

const policySchema = new mongoose.Schema(
    {
        privacyPolicy: { type: PolicyDetails, required: true },
        cookiePolicy: { type: PolicyDetails, required: true },
        termsAndConditions: { type: PolicyDetails, required: true },
        websiteTermsOfUse: { type: PolicyDetails, required: true },
    },
    {
        timestamps: true
    }
);

const Policy = mongoose.model<IPolicy>("Policy", policySchema);

export default Policy;