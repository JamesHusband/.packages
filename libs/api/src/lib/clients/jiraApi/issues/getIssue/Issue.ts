export interface JiraIssue {
  fields: {
    assignee: {
      id: string;
    };
    components: Array<{
      id: string;
    }>;
    customfield_10000: string;
    customfield_20000: string;
    customfield_30000: string[];
    customfield_40000: DocumentField;
    customfield_50000: DocumentField;
    customfield_60000: string;
    customfield_70000: string[];
    customfield_80000: {
      value: string;
    };
    description: DocumentField;
    duedate: string;
    environment: DocumentField;
    fixVersions: Array<{
      id: string;
    }>;
    issuetype: {
      id: string;
    };
    labels: string[];
    parent: {
      key: string;
    };
    priority: {
      id: string;
    };
    project: {
      id: string;
    };
    reporter: {
      id: string;
    };
    security: {
      id: string;
    };
    summary: string;
    timetracking: {
      originalEstimate: string;
      remainingEstimate: string;
    };
    versions: Array<{
      id: string;
    }>;
  };
  update?: any; // Define more specifically based on your update payload structure
}

interface DocumentField {
  content: Array<{
    content: Array<{
      text: string;
      type: string;
    }>;
    type: string;
  }>;
  type: string;
  version: number;
}
