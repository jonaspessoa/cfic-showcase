// Fixtures deliberadamente fictícias. Nenhuma cópia do banco de produção.
export const DEMO_USER = 'demo@cfic.example';
export const DEMO_PASSWORD = 'CFICdemo2026!';
export const CONTACT_STATUSES = ['Aguardando retorno','Interesse confirmado','Matriculado','Sem interesse'];
export const ENROLLMENT_STATUSES = ['Aguardando comprovante','Comprovante enviado','Pagamento confirmado','Contrato enviado','Matrícula concluída'];
export function initialData(){
 const names=['Ana Exemplo','Bruno Modelo','Clara Simulada','Diego Teste','Elisa Exemplo','Fábio Modelo','Gabriela Simulada','Hugo Teste','Íris Exemplo','João Modelo','Lara Simulada','Marcos Teste'];
 const contacts=names.map((name,i)=>({id:i+1,name,phone:`(00) 00000-${String(i+1).padStart(4,'0')}`,status:CONTACT_STATUSES[i%4],note:['Pediu informações sobre horários da turma.','Aguardando contato da equipe comercial.','Matrícula fictícia concluída para demonstração.','Sem interesse neste momento.'][i%4],sent:i<8,interest:i%4===1||i%4===2}));
 return {version:1,contacts,enrollments:[{id:'DEMO-001',name:'Clara Simulada',email:'clara@example.com',status:'Matrícula concluída'},{id:'DEMO-002',name:'Bruno Modelo',email:'bruno@example.com',status:'Comprovante enviado'},{id:'DEMO-003',name:'Gabriela Simulada',email:'gabriela@example.com',status:'Pagamento confirmado'},{id:'DEMO-004',name:'João Modelo',email:'joao@example.com',status:'Aguardando comprovante'}],activity:['Dados fictícios carregados no ambiente de demonstração.']};
}
export function authenticate(email,password){return email.trim().toLowerCase()===DEMO_USER&&password===DEMO_PASSWORD;}
export function filterContacts(rows,search='',status='Todos'){
 const normalize=value=>value.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
 return rows.filter(row=>(status==='Todos'||row.status===status)&&normalize(`${row.name} ${row.phone} ${row.note}`).includes(normalize(search)));
}
export function csvCell(value){const text=String(value);return '"'+(/^[=+@\-\t\r]/.test(text)?"'":'')+text.replaceAll('"','""')+'"';}
