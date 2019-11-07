
export let DOMAIN_NAME = window.location.hostname;
console.log("Domain Name: ", DOMAIN_NAME);
if(DOMAIN_NAME.includes("devrorapi")){
    DOMAIN_NAME = 'devcash.cyncsoftware.com';
}

export const EndPoints = {
   // API_URL: 'https://spms-dev.herokuapp.com/',
    //BASE_URL: 'https://spms-dev.herokuapp.com/api/v1/',
     API_URL: 'http://localhost:3000/',
     BASE_URL: 'http://localhost:3000/api/v1/',
    Login: 'oauth/token',
    Reset: 'users/password',
    Forgot: 'users/forgot_password',
    Logout: 'oauth/revoke',
    SummaryHours: 'dashboards/summary_hours',
    RecentActivity: 'dashboards/recent_activities',
    UserProfile: 'dashboards/me',
    Activity: 'activities',
    Projects: 'projects',
    Sheets: 'sheets',
    SheetContent: '/content',
    Notifications: 'users/notifications',
    UserUpdate: 'users',
    PendingApprovals: 'pending_approval',
    ManagerList: 'users/managers',
    Approve: 'approve',
    Reject: 'reject',
    SendForApproval: 'send_for_approval',
    DashboardActivities: 'activities/get_activities',
    RejectedSheets:'rejected_sheets',
    ApprovedSheets:'approved_sheets',
    SetRead:'dashboards/set_read',
    GitMails: 'dashboards/git_mails'

    
}