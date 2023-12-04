var bill=document.getElementById("bill")
var tips_per=document.getElementById("per")
var tips_rs=document.getElementById("tip")
var total=document.getElementById("total")
var button=document.getElementById("btn")

button.addEventListener("click",function(e){
    e.preventDefault
    var bill_amount=bill.value
    var tips_pers=tips_per.value
    percent=Number(bill_amount)*Number(tips_pers)/100
    tips_rs.value=percent
    total_amount=Number(bill_amount)+Number(percent)
    total.value=total_amount
})
