module.exports = app =>{
    app.use(
        createProxyMiddleware({
              target : 'http://54.145.54.64/indyrent_codeigniter/IndyRentFrequentSupportTickets/staff_registration',
              changeOrigin : true 
        })
    )
}