// أنشئ المصفوفة تحت هذا الكومنت
let orders = []

function addOrder() {
  let name = document.getElementById("name").value;
  let id = document.getElementById("id").value;
  let phone = document.getElementById("phone").value;
  let order = document.getElementById("order").value;
  
  // أنشئ كائن newOrder
  let newOrder = 
  {name,id,phone,order}
  // أدرج الكائن إلى المصفوفة
  orders.push(newOrder)
  // طبق الخطوة 7 تحت هذا الكومنت
  load()
}
let container = document.getElementById("container");
function load() {

  // طبّق الخطوة 6 تحت هذا الكومنت
  orders.forEach(x => {

   container.innerHTML =  `<div><h1>${x.name} - ${x.id}</h1><h3>${x.order}</h3></div>`;
});
}
function removeorder(){
  container.remove();
}