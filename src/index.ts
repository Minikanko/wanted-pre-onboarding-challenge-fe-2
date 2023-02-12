interface TagData {
  tagId: number;
  tagName: string;
}

// Class representing a TodoItem.
class TodoItem {
  userId: string; // - The id of User.
  content: string; // - The description of todoItem.
  category: string; // - The category of todoItem.
  tags?: TagData[]; // - The tagInfo List of todoItem, this is optional parameter

  // CREATE Methods ...
  constructor(
    userId: string,
    content: string,
    category: string,
    tags: TagData[]
  ) {
    this.userId = userId;
    this.content = content;
    this.category = category;
    this.tags = tags;
  }

  //  메소드의 리턴타입을 지정해주면 어떨까요??
  updateContent(content: string) {
    this.content = content;
  }

  //  메소드의 리턴타입을 지정해주면 어떨까요??
  updateCategory(category: string) {
    this.category = category;
  }

  //  메소드의 리턴타입을 지정해주면 어떨까요??
  updateTag(tagId: number, tagName: string) {
    const updateTag = this.tags?.map((item) => {
      if (item.tagId === tagId) {
        item.tagName = tagName;
      }
      return item;
    });

    this.tags = updateTag;
  }

  deleteTag(tagId: number) {
    this.tags = this.tags?.filter((item) => {
      if (item.tagId !== tagId) {
        return item;
      }
    });
  }

  deleteTagAll() {
    this.tags = [];
  }

  // READ Methods...
  render(parentNode: HTMLElement) {
    //...
  }
}
interface TodoItemData {
  id: number;
  todoItem: TodoItem;
}

class TodoList {
  todoListData: TodoItemData[];

  constructor() {
    this.todoListData = [];
  }

  // CREATE Methods...
  addTodoItem(
    userId: string,
    content: string,
    category: string,
    tags?: TagData[]
  ) {
    const index = this.todoListData[this.todoListData.length - 1].id;
    this.todoListData.push({
      id: index + 1,
      todoItem: new TodoItem(userId, content, category, tags ?? []),
    });
  }

  // DELETE Methods...
  deleteTodoItem(userId: string, todoId: number) {
    const list = this.todoListData.filter((item) => {
      !(item.id === todoId && item.todoItem.userId === userId);
    });
    this.todoListData = list;
  }

  deleteTodoList(userId: string) {
    const list = this.filterTodoListByUser(userId);
    this.todoListData = list;
  }

  // READ Methods...
  filterTodoListByUser(userId: string): TodoItemData[] {
    const list = this.todoListData.filter((item) => {
      !(item.todoItem.userId === userId);
    });
    return list;
  }

  render() {
    // ...
  }
}
