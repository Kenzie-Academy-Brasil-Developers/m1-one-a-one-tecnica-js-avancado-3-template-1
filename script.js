const funcionarios = [
    {
        nome: "Jose",
        email: "jose@gmail.com",
        departamento: "Financeiro",
        salario: 1200,
        tempoEmpresa: 2,
    },

    {
        nome: "João",
        email: "joao@gmail.com",
        departamento: "TI",
        salario: 1200,
        tempoEmpresa: 2,
    },
    {
        nome: "Andre",
        email: "andre@gmail.com",
        departamento: "Infra",
        salario: 1200,
        tempoEmpresa: 8,
    },
];

function atualizarSalariosDepartamento(funcionarios){

    for(let i = 0; i< funcionarios.length; i++){

        if(funcionarios[i].departamento == "Financeiro"){
            funcionarios[i].salario += 500
        }

    }

     return funcionarios

}
console.log(atualizarSalariosDepartamento(funcionarios))