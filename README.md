# 📅 Appointment Scheduler

Uma aplicação em **TypeScript** que permite criar **agendamentos de compromissos** com validações rigorosas de data e **prevenção de conflitos**, testada com **Vitest** e utilizando a poderosa biblioteca **date-fns**.

---

## 🚀 Visão Geral

O projeto permite criar compromissos únicos por cliente, garantindo:

✅ Datas válidas e futuras  
✅ Fim do compromisso após o início  
✅ Nenhum agendamento sobreposto (overlapping)  

---

## 🧠 Funcionalidades

- 📆 Criação de compromissos com datas válidas
- 🔁 Validação contra sobreposição de horários
- 🧪 Testes automatizados com **Vitest**
- 🛠️ Manipulação segura de datas com **date-fns**
- ♻️ Estrutura modular e orientada a objetos

### 📦 Instale as dependências

```bash
npm install
npm install typescript vitest date-fns
```

▶️ Executando os Testes
Rodar todos os testes (modo headless):
```bash
npx vitest run
npx vitest
```

## 🧪 Casos de Teste

✅ Cria um agendamento válido

❌ Impede criação com data de início no passado

❌ Impede criação com data final antes da inicial

✅ Permite criar novo agendamento

❌ Impede agendamentos sobrepostos (overlapping)

✅ Verifica se a data retornada é realmente futura


## 🧑‍🏫 Como funciona internamente?
🧱 Appointment
Classe que representa um compromisso individual e valida se a data é correta no momento da criação.

🏗️ CreateAppointment
Serviço responsável por:

Validar se há conflito de horários com agendamentos anteriores

Criar e armazenar o novo compromisso

Usa a função areIntervalsOverlapping da date-fns para detectar conflitos de horário.

🧰 getFutureDate
Utilitário que ajuda nos testes: cria uma nova data futura com base em uma string.


## 💡 Aprendizados e Práticas
Orientação a objetos em TypeScript

Criação e validação de regras de negócio

Separação de responsabilidades por arquivos

Testes unitários com cobertura de falhas e sucesso

Uso de ferramentas modernas (date-fns, Vitest)
