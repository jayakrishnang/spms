
export let DOMAIN_NAME = window.location.hostname;
console.log("Domain Name: ", DOMAIN_NAME);
if(DOMAIN_NAME.includes("devrorapi")){
    DOMAIN_NAME = 'devcash.cyncsoftware.com';
}

export const EndPoints = {
    // API_URL: `https://spms-dev.herokuapp.com/`,
    // BASE_URL: `https://spms-dev.herokuapp.com/api/v1/`,
    API_URL: `http://localhost:3000/`,
    BASE_URL: `http://localhost:3000/api/v1/`,
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
    Notifications: 'users/notifications',
    UserUpdate: 'users'
    
}