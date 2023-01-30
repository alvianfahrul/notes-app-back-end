const { addNoteHandler, getAllNotesHandler, getNoteIdByHandler, editNoteByHandlerId, deleteNoteByIdHandler } = require("./handler");

const routes = [
    {
      method: 'POST',
      path: '/notes',
      handler: addNoteHandler,
    },
    {
      method: 'GET',
      path: '/notes',
      handler: getAllNotesHandler,
    },
    {
      method: 'GET',
      path: '/notes/{id}',
      handler: getNoteIdByHandler
    },
    {
      method: 'PUT',
      path: '/notes/{id}',
      handler: editNoteByHandlerId
    },
    {
      method: 'DELETE',
      path: '/notes/{id}',
      handler: deleteNoteByIdHandler
    }
  ];

  module.exports = routes;