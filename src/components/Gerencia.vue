<template>
  <section class="management">
    <div class="management-title">
      <span class="management-title_box">
        <p class="title_box-name">Diretoría</p>
        <p class="title_box-description">Comercial</p>
      </span>
      <span class="management-title_box">
        <p class="title_box-name">Gerência</p>
        <p class="title_box-description">Captação EAD</p>
      </span>
    </div>

    <div class="management-users">
      <div class="users-title table-label">
        <h2>Usuário</h2>
        <a href="">
          <span>Adicionar usuário</span>
        </a>
      </div>
      <table class="users-table table">
        <tr class="drop-out">
          <th>Nome</th>
          <th>Gerência</th>
          <th>Perfil</th>
        </tr>
        <tr>
          <td>Miguel Ribeiro</td>
          <td class="drop-out"><a href="#">CRM e Orçamento</a></td>
          <td><a href="#">Administrador</a></td>
        </tr>
        <tr class="table-row-type2">
          <td>Edna Isabelle</td>
          <td class="drop-out"><a href="#">CRM e Orçamento</a></td>
          <td><a href="#">Administrador</a></td>
        </tr>
        <tr>
          <td>Mariana Freire</td>
          <td class="drop-out"><a href="#">CRM e Orçamento</a></td>
          <td><a href="#">Administrador</a></td>
        </tr>
        <tr class="table-row-type2">
          <td>José Mauro Ferreira</td>
          <td class="drop-out"><a href="#">Unidades, Fidelização e… (+4)</a></td>
          <td><a href="#">Diretor</a></td>
        </tr>
        <tr>
          <td>Henrique da Gama</td>
          <td class="drop-out"><a href="#">Unidades</a></td>
          <td><a href="#">Gerente</a></td>
        </tr>
        <tr class="table-row-type2">
          <td>Fabiana Gouvea</td>
          <td class="drop-out"><a href="#">Unidades</a></td>
          <td><a href="#">Usuário</a></td>
        </tr>
      </table>
    </div>

    <div class="management-costCenter">
      <div class="costCenter-title table-label">
        <h2>Centros de Custo</h2>
        <span><a href="">Adicionar Centro de Custo</a></span>
      </div>
      <table class="costCenter-table table">
        <tr class="drop-out">
          <th>Identificador</th>
          <th class="drop-out">Canal</th>
          <th>Código</th>
        </tr>
        <tr>
          <td>Comercial - Captação EAD</td>
          <td class="drop-out">Corporativo</td>
          <td><a href="">33000025704</a></td>
        </tr>
      </table>
    </div>

    <div class="management-budgeting">
      <div class="budgeting-title table-label">
        <div>
          <h2>Orçamentos</h2>
          <p>Ano:</p>
          <select>
            <option><a href="#">Selecione aqui</a></option>
            <option><a href="#">Selecione aqui</a></option>
            <option><a href="#">Selecione aqui</a></option>
            <option><a href="#">Selecione aqui</a></option>
          </select>
        </div>
        <span><a href="">Editar</a></span>
      </div>
      <div class="budgeting-table">
        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Janeiro</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
        </table>

        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Fevereiro</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>
        
        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Março</th>
          </tr>
           <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>
        
        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Abril</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
        </table>

        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Maio</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>
        
        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Junho</th>
          </tr>
           <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>

        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Julho</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
        </table>

        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Agosto</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>
        
        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Setembro</th>
          </tr>
           <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>

        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Outubro</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.300.000,00</td>
          </tr>
        </table>

        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Novembro</th>
          </tr>
          <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>
        
        <table class="budgeting-month table">
          <tr>
            <th colspan="3">Dezembro</th>
          </tr>
           <tr class="month-bold">
            <td>Opex</td>
            <td class="month-column2">2.300.000,00</td>
          </tr>
          <tr class="month-bold">
            <td>Capex</td>
            <td class="month-column2">1.200.000,00</td>
          </tr>
          <tr>
            <td>Transferência</td>
            <td class="month-column2">200.000,00</td>
          </tr>
          <tr>
            <td>Suplementação</td>
            <td class="month-column2">400.000,00</td>
          </tr>
          <tr>
            <td>Antecipação</td>
            <td class="month-column2">5.000,00</td>
          </tr>
          <tr>
            <td>Postergação</td>
            <td class="month-column2">10.000,00</td>
          </tr>
          <tr class="month-cut">
            <td>Corte</td>
            <td class="month-column2">- 400.000,00</td>
          </tr>
          <tr class="month-total">
            <td>Total</td>
            <td class="month-column2">3.535.000,00</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return
    }
  }
</script>

<style scoped>
a {
  text-decoration: none;
}

.management {
  display: flex;
  align-content: center;
  flex-direction: column;
  background-color: white;
  max-width: 80vw;
}

.management-title,
.management-users,
.management-costCenter,
.management-budgeting {
  margin-bottom: 30px;
  padding: 10px;
}

.management-title {
  display: flex;
  width: 80vw;
  margin-bottom: 20px;
  border: solid .5px rgba(193, 198, 200, 1);
  padding-left: 15px;
}

.management-title_box {
  min-width: 150px;
}

.title_box-name {
  margin: 0;
}

.title_box-description {
  font-weight: 900;
  margin: 0;
  color: rgba(0, 113, 205, 1)
}

.management-users, .management-costCenter {
  display: flex;
  flex-direction: column;
  width: 99%;
}

.table {
  width: 100%
}

.table-label {
  display: flex;
  justify-content: space-between;
}

.table-label h2,
.table-label p {
  margin: 0
}

.users-title {
  padding: 0 5px;
}

.table {
  border: solid .5px rgba(193, 198, 200, 1);
}

.table-row-type2 {
  background-color: rgba(247, 247, 247, 1);
}

.table tr th, 
  .table tr td{
    padding-left: 20px;
    width: 33%;
}

.table tr th{
  background-color: rgba(230, 241, 250, 1);
  text-align: left;
  font-weight: 700;
  height: 35px;
}

.table tr tr{
  height: 30px;
}

.budgeting-title{
  width: 98.5%;
}

.budgeting-title div{
  display: flex;
  justify-content: space-between;
  width: 300px;
}

.budgeting-title div select {
  background: none;
  border: none;
  height: auto;
}

.budgeting-table {
  display: flex;
  flex-flow: row wrap;
}

.budgeting-month {
  width: 33%;
  min-height:250px;
  background-color: rgba(242, 249, 255, 1);
}

.budgeting-month tr th {
  text-align: center;
  padding: 0
}

.budgeting-month tr td {
  color: rgba(128, 128, 128, 1);
  font-size: 15px;
  font-weight: 600;
}

.month-column2 {
  text-align: right;
  padding-right: 20px;
}

.month-bold td {
  color: black !important; 
}

.month-cut td {
  color: rgba(230, 35, 35, 1) !important;
  font-weight: 600; 
}

.month-total td {
  background-color: white;
  color: rgba(0, 84, 166, 1)!important;
  font-weight: 600;
  height: 40px;
}

@media (max-width: 768px) {
  .management {
    max-width: 100%
  }

  .management-title {
    flex-direction: column;
    width: 100vw
  }

  .management-title_box { 
    display: flex;
    flex-flow: row nowrap;
    min-width: auto;
  }

  .title_box-description {
    margin-left: 10px;
  }
  
  .budgeting-table {
    flex-direction: column;
  }

  .budgeting-month {
    width: 100%
  }

  .budgeting-month td {

  }

  .drop-out {
    display: none;
  }

  .costCenter-table tr td {
    width: auto;
  }
}
</style>
