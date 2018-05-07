<template>
  <section class="newvicep">
    <div class="newvicep-header">
      <button class="newvicep-botton">Nova Vice Presidência</button>
    </div>

    <div class="table-boxes">
      <h2 class="table-boxes_title">VP Marketing</h2>
      <table class="table">
        <tr class="table-label">
          <td>VP Marketing</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr>
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>VP Marketing</td>
          <td>33000025704, 33000025723, 330…</td>
          <td>1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td>Comercial</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr>
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>Call Center Captação</td>
          <td>33000025798</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Captação EAD</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Captação Presencial</td>
          <td>33234025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Unidades Comercial</td>
          <td>33056725704</td>
          <td>1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td>Comunicação</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr>
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>Assoria de Imprensa</td>
          <td>33000025798</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Branding</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Marketing Relacionamento</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Produção</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Redes Sociais</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Trade Marketing EAD</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Trade Marketing Presencial</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td>Fidelização e Rentação</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr>
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
         <tr>
          <td>BI</td>
          <td>33000025798</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Call Center Retenção</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>DDM (Campanhas)</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Fidelização e Retenção</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Unidades (Fidel. e Reten.)</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td>Fidelização e Rentação</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr>
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
         <tr>
          <td>CRM e Orçamento</td>
          <td>33000025798</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Mídia On</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
        <tr>
          <td>Mídia Off</td>
          <td>23000025704</td>
          <td>1,2 m</td>
        </tr>
      </table>
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
.newvicep {
  width: 80vw;
}

.table {
  width: 100%;
  border: solid .5px rgba(193, 198, 200, 1);
}

.table-label {
  display: flex;
  justify-content: space-between;
}

.table-label td,
.table-label td {
  margin: 0
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
}

@media (max-width: 768px) {
  .newvicep {
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
