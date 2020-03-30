export class NoRecordsWithIdException extends Error{
    code = 404
    message = 'no records found with such id'
}
