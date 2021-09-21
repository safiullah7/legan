export interface ITeam {
    selectedTeamMember: ITeamMember | null,
    team: ITeamMember[],
}
export interface ITeamMember {
    name: string,
    id: string,
    imgURL: string,
    title: string,
    Description: string,
}
export interface ITeamId {
    memberId: string,
}