
var itcast = {
  getRouterName:(str)=>{
      let index = str.indexOf('?')
      let routerName = ''
      if(index == -1){ // 说明没有参数
          routerName = str.substring(str.lastIndexOf('/')+1)
      }else{
          routerName = str.substring(str.lastIndexOf('/')+1,str.indexOf('?'))
      }
      return routerName
  }
}