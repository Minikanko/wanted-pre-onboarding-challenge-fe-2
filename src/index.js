// @author Dean

/**
 * 할일
 * @typedef {object} Todo
 * @property {number} id - 할일 id
 * @property {string} content -  내용
 * @property {boolean} isComplete - 완료여부
 * @property {string[]} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * 내용 없이 추가할 수 없다.
 * @param {string} content
 * @param {string[]?} category
 * @param {string[]?} tags
 * @return {Todo}
 * @throws {IsNullContent}
 */
function CREATE(content, category, tags) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 * @type {number} id
 * @return {Todo}
 */
function read(id) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 * @type {Todo} todo
 * @return {Todo}
 */
function update(todo) {}

/**
 * 모든 할 일을 제거할 수 있다.
 * @return {void}
 */
function deleteAllTodo() {}

/**
 * 특정 TODO 삭제
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 * @param {string} id
 * @return {void}
 */
function deleteById(id) {}

/**
 * 특정 TODO의 특정 태그 삭제
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 * @param {string} id
 * @param {string[]} targetTags
 * @return {void}
 */
function deleteTag(id, targetTags) {}

/**
 * 특정 TODO의 모든 태그 삭제
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 * @param {string} id
 * @return {void}
 */
function deleteAllTag(id) {}
