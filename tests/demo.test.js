import {test} from 'node:test';
import assert from 'node:assert/strict';
import {initialData,authenticate,filterContacts,csvCell} from '../data.js';
test('credenciais públicas abrem apenas o cenário demo',()=>{assert.equal(authenticate('demo@cfic.example','CFICdemo2026!'),true);assert.equal(authenticate('outro@example.com','CFICdemo2026!'),false);assert.equal(authenticate('demo@cfic.example','incorreta'),false);});
test('conjuntos iniciais são independentes e usam contatos inválidos',()=>{const a=initialData(),b=initialData();a.contacts[0].name='Alterado';assert.notEqual(a.contacts[0].name,b.contacts[0].name);assert.ok(b.contacts.every(c=>c.phone.startsWith('(00)')));assert.ok(b.enrollments.every(c=>c.email.endsWith('@example.com')));});
test('busca ignora acentos e combina filtro de situação',()=>{const rows=initialData().contacts;assert.equal(filterContacts(rows,'fabio').length,1);assert.ok(filterContacts(rows,'','Matriculado').every(c=>c.status==='Matriculado'));assert.equal(filterContacts(rows,'inexistente').length,0);});
test('exportação escapa aspas e neutraliza fórmulas de planilha',()=>{assert.equal(csvCell('Ana "Demo"'),'"Ana ""Demo"""');assert.equal(csvCell('=1+1'),'"\'=1+1"');});
