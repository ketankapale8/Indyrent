import axios from 'axios'

export function  requestGetStaffRegistrations(data){
    return axios.request({
        method : 'POST',
        headers :{
            Accept : 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            data
        }),
        url : "http://54.145.54.64/indyrent_codeigniter/IndyRentFrequentSupportTickets/staff_registration/",
        
    })

}