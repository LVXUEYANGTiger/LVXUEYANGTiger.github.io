//随机背景图片数组,图片可以换成图床链接，注意最后一条后面不要有逗号
var backimg =[
  "url(https://blog-1259153703.cos.ap-nanjing.myqcloud.com/images/20210912121348.jpg)",
  "url(https://lvxueyangboke.oss-cn-beijing.aliyuncs.com/images/20210830103321.jpg)",
  "url(https://blog-1259153703.cos.ap-nanjing.myqcloud.com/images/20210912121348.jpg)",
  "url(https://lvxueyangboke.oss-cn-beijing.aliyuncs.com/images/20210830103450.jpg)",
  "url(https://blog-1259153703.cos.ap-nanjing.myqcloud.com/images/20210912121348.jpg)",
  "url(https://lvxueyangboke.oss-cn-beijing.aliyuncs.com/images/20210906142902.jpg)",
  "url(https://lvxueyangboke.oss-cn-beijing.aliyuncs.com/images/20210830103321.jpg)"
];
//获取背景图片总数，生成随机数
var bgindex =Math.ceil(Math.random() * (backimg.length-1));
//重设背景图片
document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
