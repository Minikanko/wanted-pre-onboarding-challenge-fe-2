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

interface ITodo {
  id: number;
  content: string;
  isComplete: boolean;
  category?: string[];
  tags?: string[];
}
/**
 * 내용 없이 추가할 수 없다.
 */
interface IAddTodo {
  content: string;
  category?: string[];
  tags?: string[];
}

function create(_fn: ({ content, category, tags }: IAddTodo) => ITodo) {}

/**
 * 모든 할 일을 조회할 수 있다.
 * ID를 기반으로 특정 할 일을 조회할 수 있다.
 */
function read(_fn: (id: number) => ITodo) {}

/**
 * ID를 제외한 모든 속성을 수정할 수 있다.
 * 특정 할 일의 특정 태그를 수정할 수 있다.
 */
function update(_fn: (todo: ITodo) => ITodo) {}

/**
 * 모든 할 일을 제거할 수 있다.
 */
function deleteAllTodo(): void {}

/**
 * ID를 기반으로 특정 할 일을 삭제할 수 있다.
 */
function deleteById(_fn: (id: string) => void) {}

/**
 * 특정 할 일의 특정 태그를 삭제할 수 있다.
 */
interface IRemoveTag {
  id: number;
  targetTags: string[];
}
function deleteTag(_fn: ({ id, targetTags }: IRemoveTag) => ITodo) {}

/**
 * 특정 할 일의 모든 태그를 제거할 수 있다.
 */
function deleteAllTag(_fn: ({ id: number }) => ITodo) {}
