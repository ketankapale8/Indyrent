import axios from 'axios'

export function requestGetStaffRegistrations({data}){
    return axios.request({
        method : 'post',
        url : "http://54.145.54.64/indyrent_codeigniter/IndyRentFrequentSupportTickets/staff_registration/",
        data
    })
}