//This dashboard pop up is for both OPERATOR + MANAGER
// These buttons are self-explanatory

const manager_dashboard = {};

manager_dashboard.call = () => {
    bootbox.dialog({
        title: 'Welcome to the Manager and Operator Dashboard, ',
        message: '<p> Please Indicate Your Action </p>',
        size: 'large',
        onEscape: true,
        backdrop: true,
        buttons: {
            a: {
                label: 'EDIT USER ACCOUNT',
                className: 'btn-primary',
                callback: () => {
                                    
                }
            },
            b: {
                label: 'REQUEST SUMMARY OF SERVICE',
                className: 'btn-info',
                callback: () => {
                    Type_of_Report.call()
                }
            },
            c: {
                label: 'MANAGE MEMBER ACCOUNTS',
                className: 'btn-success',
                callback: () => {
                                    
                }
            },

            d: {
                label: 'MANAGE OPERATOR ACCOUNTS',
                className: 'btn-success',
                callback: () => {

                }
            }
        }
    })
}