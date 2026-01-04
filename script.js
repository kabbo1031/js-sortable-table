let asc = true;

function sortTable(col){
  const tbody = document.getElementById('body');
  const rows = Array.from(tbody.querySelectorAll('tr'));

  rows.sort((a,b)=>{
    const A = a.children[col].innerText;
    const B = b.children[col].innerText;

    return asc
      ? A.localeCompare(B, undefined, {numeric:true})
      : B.localeCompare(A, undefined, {numeric:true});
  });

  asc = !asc;
  tbody.innerHTML = '';
  rows.forEach(r=>tbody.appendChild(r));
}
