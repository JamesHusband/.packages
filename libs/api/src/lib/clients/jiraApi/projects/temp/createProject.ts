// // This sample uses Atlassian Forge
// // https://developer.atlassian.com/platform/forge/
// import api, { route } from '@forge/api';

// var bodyData = `{
//   "assigneeType": "PROJECT_LEAD",
//   "avatarId": 10200,
//   "categoryId": 10120,
//   "description": "Cloud migration initiative",
//   "issueSecurityScheme": 10001,
//   "key": "EX",
//   "leadAccountId": "5b10a0effa615349cb016cd8",
//   "name": "Example",
//   "notificationScheme": 10021,
//   "permissionScheme": 10011,
//   "projectTemplateKey": "com.atlassian.jira-core-project-templates:jira-core-simplified-process-control",
//   "projectTypeKey": "business",
//   "url": "http://atlassian.com"
// }`;

// const response = await api.asUser().requestJira(route`/rest/api/3/project`, {
//   method: 'POST',
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
//   body: bodyData,
// });

// console.log(`Response: ${response.status} ${response.statusText}`);
// console.log(await response.json());
