export interface ITeam {
    selectedTeamMember: ITeamMember | null,
    team: ITeamMember[],
}
export interface ITeamMember {
    name: string,
    id: string,
    imgURL: string,
    title: string,
    description: string,
}
export interface ITeamId {
    memberId: string,
}