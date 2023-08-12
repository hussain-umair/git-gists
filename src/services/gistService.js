import { Octokit } from "@octokit/rest";
const octokit = new Octokit()

export const getPublicGists = ({ perPage: per_page = 30, ...rest } = {}) => octokit.gists.listPublic({ per_page, ...rest })

export const getGistForUser = username =>  octokit.gists.listForUser({ username });