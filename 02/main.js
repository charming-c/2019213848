document.getElementById("ai").onmouseover = function() {mouseOver("ai")};
document.getElementById("English").onmouseover = function() {mouseOver("English")};
document.getElementById("os1").onmouseover = function() {mouseOver("os1")};
document.getElementById("xi").onmouseover = function() {mouseOver("xi")};
document.getElementById("compile").onmouseover = function() {mouseOver("compile")};
document.getElementById("web1").onmouseover = function() {mouseOver("web1")};
document.getElementById("se").onmouseover = function() {mouseOver("se")};
document.getElementById("job").onmouseover = function() {mouseOver("job")};
document.getElementById("design").onmouseover = function() {mouseOver("design")};
document.getElementById("web2").onmouseover = function() {mouseOver("web2")};
document.getElementById("os2").onmouseover = function() {mouseOver("os2")};



document.getElementById("ai").onmouseout = function() {mouseOut("ai")};
document.getElementById("web1").onmouseout = function() {mouseOut("web1")};
document.getElementById("os1").onmouseout = function() {mouseOut("os1")};
document.getElementById("English").onmouseout = function() {mouseOut("English")};
document.getElementById("xi").onmouseout = function() {mouseOut("xi")};
document.getElementById("compile").onmouseout = function() {mouseOut("compile")};
document.getElementById("se").onmouseout = function() {mouseOut("se")};
document.getElementById("job").onmouseout = function() {mouseOut("job")};
document.getElementById("design").onmouseout = function() {mouseOut("design")};
document.getElementById("web2").onmouseout = function() {mouseOut("web2")};
document.getElementById("os2").onmouseout = function() {mouseOut("os2")};

let myMap = new Map();
myMap.set("ai","课程名称：人工智能<br/>任课老师：戴上平<br/>上课时间：周三第一、二节课<br/>上课地点：N113<br/>课程简介：暂无");
myMap.set("web1","课程名称：web程序设计<br/>任课老师：涂新辉<br/>上课时间：周二第一、二节课，周四第五六节<br/>上课地点：N108<br/>课程简介：暂无");
myMap.set("web2","课程名称：web程序设计<br/>任课老师：涂新辉<br/>上课时间：周二第一、二节课，周四第五六节<br/>上课地点：N108<br/>课程简介：暂无");
myMap.set("os1","课程名称：操作系统原理<br/>任课老师：叶俊民<br/>上课时间：周三第三、四节课，周五第一、二节<br/>上课地点：N108<br/>课程简介：暂无");
myMap.set("os2","课程名称：操作系统原理<br/>任课老师：叶俊民<br/>上课时间：周三第三、四节课，周五第一、二节<br/>上课地点：N108<br/>课程简介：暂无");
myMap.set("English","课程名称：专业英语<br/>任课老师：朱瑄<br/>上课时间：周一第七、八节课<br/>上课地点：N211<br/>课程简介：暂无");
myMap.set("xi","课程名称：习近平新时代中国特色社会主义<br/>任课老师：吕惠东<br/>上课时间：周四第三、四节课<br/>上课地点：N223<br/>课程简介：暂无");
myMap.set("compile","课程名称：编译原理<br/>任课老师：蔡霞<br/>上课时间：周四第七、八节课<br/>上课地点：N211<br/>课程简介：《编译原理》课程是为计算机科学与技术专业及软件工程专业本科高年级学生开设的一门专业必修课程。它既是一门理论性、实践性、技术性很强的课程，也是理论与实践紧密结合的课程。本课程设置的目的是通过对编译系统的结构、文法和语言的基本知识、自动机、词法分析和语法分析的一般原理和算法、语法制导翻译技术、代码优化的学习，使学生较好地掌握编译原理的基本原理和基本技术、编译原理中涉及的基本算法、基本结构和主要实现技术，从而让学生了解将高级程序设计语言源程序翻译成计算机能处理的目标代码语言的整个过程，基本掌握计算机系统软件之一的编译程序的构造原理及相关技术，同时，还可提高学生计算机专业素质，培养学生的抽象思维能力。");
myMap.set("se","课程名称：软件工程导论<br/>任课老师：李蓉<br/>上课时间：周一第三、四节课<br/>上课地点：N108<br/>课程简介：暂无");
myMap.set("job","课程名称：职场塑型：打造工作胜任力<br/>任课老师：杨炎轩<br/>上课时间：周二第九、十节课<br/>上课地点：8311<br/>课程简介：任何职场表面上看都是场所，但实质上看都是一群人的集合，没有人的职场是不能叫职场的。因此，从个体、群体、组织特征的角度来认识职场的本质，就是必要的了；从个体人的修养、群体人的合作、组织人的创生来塑造职场人，就是必然的了。职场的本质与职场人的塑造共分为三大模块：职场个体人的本质与塑造：成功看得见，能力是关键（能力的本质与职场个体能力的提升）；性格决定命运（性格的本质与职场个体性格的修养）；态度决定高度（态度的本质与职场个体态度的转变）；激发员工动机，创造非凡业绩（动机的本质与职场个体动机的激励）。职场群体人的本质与塑造：众人拾柴火焰高（群体行为的本质与职场群体行为的改进）；家和万事兴（人际关系的本质与职场人际关系的处理）；无规矩不成方圆（群体规范的本质与职场群体规范的能动适应）；权力不是儿戏（权力、政治的本质与职场权力、政治的应对）；正视冲突，顺畅沟通（群体冲突的本质与职场群体冲突的调适）。职场组织人的本质与塑造：人职匹配，人尽其才（组织结构的本质与职场组织结构对人的重塑）；人心齐，泰山移（组织文化与职场组织文化对人的重塑）。");
myMap.set("design","课程名称：设计模式<br/>任课老师：李增扬<br/>上课时间：周二第七、八节课<br/>上课地点：N530<br/>课程简介：暂无");

function mouseOver(id) {
  document.getElementById(id).style.color = "red";
  document.getElementsByClassName("content")[0].innerHTML=myMap.get(id);
}

function mouseOut(id) {
  document.getElementById(id).style.color = "black";
}