	document.getElementById('getApi').addEventListener('click', getApi);
	var btnRemover = document.getElementById('btnRemover');
	// var remocao = document.getElementById('btnRemover');

	function getApi(){
		fetch('array.json')
		.then((res) => res.json())
		.then((data) => {
			var result = `<h2 class="mb-2">Resultado:</h2>`;
			data.forEach(function(user){
				result += `
				<table class="table table-hover">
				<thead  class="bg-primary text-white">
				<tr>
					<th scope="col">#</th>
					<th scope="col">Nome:</th>
					<th scope="col">Sobrenome:</th>
					<th scope="col">Stream:</th>
					<th scope="col">Email:</th>
				</tr>
				</thead>
				<tbody>
				<tr>
					<th scope="row"> ${user.id} </th>
					<td> ${user.nome} </td>
					<td> ${user.sobrenome} </td>
					<td> ${user.stream} </td>
					<td> ${user.email} </td>
					</tr>
				<tr>
				</tbody>
				</table>
				`;
			});
			document.getElementById('result').innerHTML = result;
		})
		.catch((err) => console.log(err))
	}
		// Remove Conteúdo
		btnRemover.addEventListener('click', function(){
		// result.classList.add('remocao');
		result.style.display = 'none';
		})