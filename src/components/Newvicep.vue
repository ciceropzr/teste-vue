<template>
  <section class="newvicep">
    <div class="newvicep-header">
      <button class="newvicep-botton">+ Nova Vice Presidência</button>
    </div>

    <div class="table-boxes">
      <h2 class="table-boxes_title">VP Marketing</h2>
      <table class="table">
        <tr class="table-label">
          <td colspan="2" class="table-subtitle">VP Marketing</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr class="drop-out">
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>VP Marketing</td>
          <td class="drop-out">33000025704, 33000025723, 330…</td>
          <td class="drop-out">1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td colspan="2" class="table-subtitle">Comercial</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr class="drop-out">
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>Call Center Captação</td>
          <td class="drop-out">33000025798</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Captação EAD</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Captação Presencial</td>
          <td class="drop-out">33234025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Unidades Comercial</td>
          <td class="drop-out">33056725704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td colspan="2" class="table-subtitle">Comunicação</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr class="drop-out">
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>Assoria de Imprensa</td>
          <td class="drop-out">33000025798</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Branding</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Marketing Relacionamento</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Produção</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Redes Sociais</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Trade Marketing EAD</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Trade Marketing Presencial</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td colspan="2" class="table-subtitle">Fidelização e Rentação</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr class="drop-out">
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>BI</td>
          <td class="drop-out">33000025798</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Call Center Retenção</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>DDM (Campanhas)</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Fidelização e Retenção</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Unidades (Fidel. e Reten.)</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
      </table>
      <table class="table">
        <tr class="table-label">
          <td colspan="2" class="table-subtitle">Fidelização e Rentação</td>
          <td>+ Nova Gerência</td>
        </tr>
        <tr class="drop-out">
          <th>Gerência</th>
          <th>Centro de Custo</th>
          <th>Orçamento</th>
        </tr>
        <tr>
          <td>CRM e Orçamento</td>
          <td class="drop-out">33000025798</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Mídia On</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
        </tr>
        <tr>
          <td>Mídia Off</td>
          <td class="drop-out">23000025704</td>
          <td class="drop-out">1,2 m</td>
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

.newvicep-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 80vw;
  height: 80px;
  border: solid .5px rgba(193, 198, 200, 1);
  padding: 20px;
}

.newvicep-botton {
  height: 55px;
  background-color: rgba(0, 113, 205, 1);
  border-radius: 2px;
  border: none;
  color: white;
  font-weight: 900;
}

.table-boxes {
  border: solid .5px rgba(193, 198, 200, 1);
  padding: 5px;
}

.table-boxes_title {
  font-weight: 900
}

.table {
  width: 100%;
  border: solid .5px rgba(193, 198, 200, 1);
}

.table-label {
  width: 33%;
  height: 40px !important;
}

.table-label td {
  background-color: rgba(0, 84, 166, 1);
  width: 20%;
  margin: 0;
  color: white;
  text-align: right;
}

.table-subtitle {
  text-align: center !important;
  width: 80%;
}

.table tr th, 
.table tr td{
  padding-left: 20px;
  width: 33%;
}
.table tr {
  height: 30px;
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

  .table-boxes {
    border: solid .5px rgba(193, 198, 200, 1);
    padding: 5px;
  }

  .newvicep {
    width: 100%
  }

  .newvicep-header {
    flex-direction: column;
    justify-content: center;
    width: 100%;
    padding: 0;
  }

  .newvicep-botton {
    width: 90%;
  }

  .table-boxes_title {
    padding-left: 20px;
  }

  .table tr td {
    width: auto;
  }

  .drop-out {
    display: none;
  }

  .costCenter-table tr td {
    width: auto;
  }
}
</style>
