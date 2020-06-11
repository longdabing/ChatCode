function opensocket(){
  var wscoket = wx.connectSocket({
    url: 'ws://localhost:50596/api/WSocket?fname=longdb',
  });
  wscoket.onOpen(res=>{
    console.log("连接成功！");
  });
  wscoket.onMessage(res=>{
    console.log(res.data);
  })
  wscoket.onClose(()=>{
    console.log("close");
  })
}
module.exports={
  opensocket:opensocket,
}