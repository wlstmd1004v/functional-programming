//# --------------------------------------------------------------------------
//# 📌 [프로그래밍 패러다임]
//# --------------------------------------------------------------------------
//# - 명령형, 선언형 프로그래밍 비교
//# - 함수, 객체 지향 프로그래밍 비교
//# --------------------------------------------------------------------------

//# --------------------------------------------------------------------------
//# 명령형 프로그래밍

const courses = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];

//console.log("원본데이터\n", courses);

//@ 1. 과정 배열을 순환하여 각 과정 이름의 좌우 공백 제거
//@ 2. 과정 배열을 순환하여 각 과정 이름 대문자화

//@ ES2016(v6)
//@ [전개구문(spread syntax)]을 사용하면 배열을 복사할 수 있다.

const updateCourses = []; // [...courses];

//@ [기능 1]. 좌우 공백 제거
//@ 명령형으로 프로그래밍 한다.
//@ C, JAVA 문법
//@ for문

//const course = updateCourses[i];
//course.name= course.name.trimStart();
//course.name= course.name.trimEnd();

for (let i = 0, l = courses.length; i < l; i = i + 1) {
  //@ 객체 복제는 어떻게??
  //@ [전개구문(spread syntax)]을 사용한다.

  const course = { ...courses[i] };
  course.name = course.name.trim();
  updateCourses.push(course);
}

//@ [기능 2]. 대문자화
for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.toUpperCase();
}

//@ [기능 3]. 배열 원소의 name 속성의 공백을 밑줄로 변경하는 기능 추가
for (let i = 0, l = updateCourses.length; i < l; ++i) {
  const course = updateCourses[i];
  course.name = course.name.replace(/\s+/g, "_");
}
console.log(updateCourses);

//console.log("변형된 데이터\n", updateCourses);

//console.assert(
//  !Object.is(courses, updateCourses),
//  " courses와 updateCourses는 동일한 객체이다."
//);

//@ 1. 과정 배열을 순환하여 각 과정 이름의 좌우 공백 제거
//@ 2. 과정 배열을 순환하여 각 과정 이름 대문자화

// --------------------------------------------------------------------------
//# 선언형 프로그래밍(재귀함수(Recursion),클로저(Closure), 커링함수(Currying), 고차함수(HOF))

const subjects = [
  {
    id: 1,
    name: " imperative programming",
  },
  {
    id: 2,
    name: "declarative programming ",
  },
];

console.log("원본데이터\n", courses);

//@ 1. 객체 이름(name) 속성 좌우 공백 제거 함수 선언
function toTrim(object) {
  const o = { ...object };
  o.name = o.name.trim();
  return o;
}

//console.log(toTrim(subjects[0]));
//console.log(toTrim(subjects[1]));

//@ 2. 객체 이름(name) 속성 대문자화 함수 선언
function toUpperCase(object) {
  const o = { ...object };
  o.name = o.name.toUpperCase();
  return o;
}
//console.log(toUpperCase(subjects[0]));
//console.log(toUpperCase(subjects[1]));

console.log("변형된 데이터\n", updateCourses);

//@ 3. 배열 원소의 name 속성의 공백을 밑줄로 변경하는 기능 추가
function toUnderscore(object) {
  const o = { ...object };
  o.name = o.name.replace(/\s+/g, "_");
  return o;
}

//@ 4. 과목 이름 "좌우 공백 제거" → "대문자화" 후, 새로운 과목 배열 생성
//@ ES5의 map()을 사용해야 한다.
//@ 조건 1. 새로운 배열 반환
//@ 조건 2. 배열 순환 후, 기능처리 (적용)

const updateSubjects = subjects
  .map((subject) => {
    const copySubject = toTrim(subject);
    return copySubject;
  })
  .map((subject) => {
    const copySubject = toUpperCase(subject);
    return copySubject;
  });

const updateSubjects1 = subjects.map(toTrim).map(toUpperCase).map(toUnderscore);

console.log("업데이트 데이터\n", updateSubjects);
console.log("업데이트 데이터\n", updateSubjects1);

//# --------------------------------------------------------------------------
//# JavaScript 프로그래밍 패러다임
//# → 함수(function)를 사용해 구현합니다.

//^ function createCountUpButton() {
//^   const button = document.querySelector(".countUp");
//^   button.addEventListener("click", () => {
//^     const currentValue = parseInt(button.textContent);
//^     if (currentValue >= 9) {
//^       button.textContent = 0;
//^       return;
//^     }
//^     button.textContent = currentValue + 1;
//^   });
//^ }
//^ createCountUpButton();

//^function createCountUpButton(
//^  container,
//^  { count: initialCount = 0, step = 1, max = 10 } = {}
//^) {
//^  if (!container || container.nodeType !== document.ELEMENT_NODE) {
//^    throw new Error("container는 문서의 요소가 아닙니다.");
//^  }

  //console.log({ initialCount, step });
//^  let count = initialCount;
//^  const countUpButton = document.createElement("button");

//^  const render = (newCount) => {
//^    countUpButton.textContent = String(newCount);
//^  };

  //& 과제
  //& 'max' prop을 추가하고, count 값이 max보다 커지면 사용자가 더 이상 버튼을 누를 수 없도록 막는다
  //& 'max' prop을 추가하고, count 값이 max보다 커지면 화면의 카운트는 버튼을 눌러도 max 값에 머무른다.

//^  const handleCountUp = (e) => {
//^    if (count + step > max || count >= max) {
//^      count = max;
//^      render(count);
//^      return;
//^    }
//^    count += step;
    //^ Update한 count를 render
//^    render(count);
//^  };

//^  countUpButton.setAttribute("type", "button");
//^  countUpButton.classList.add("countUpButton");

//^  countUpButton.addEventListener("click", handleCountUp);

  //^ 초기값인 count를 render
//^  render(count);

//^  container.append(countUpButton);
//^}
//^ const demoContainer = document.getElementById("demo");

//^ default: {count:0, step: 1}
//^ createCountUpButton(demoContainer);
//^ createCountUpButton(demoContainer, { count: 1 });
//^ createCountUpButton(demoContainer, { count: 2 });
//^ createCountUpButton(demoContainer, { count: 3, step: 2 });

//^ createCountUpButton(demoContainer, { count: 3, step: 2 });

/* class CountUpButton {
  constructor(userOptions) {
    this.config = { ...CountUpButton.defaultProps, ...userOptions };
    this.init();
  }
  init() {
    console.log(this.config);
  }
  // static field
  static defaultProps = {
    count: 0,
    step: 1,
  };
}

globalThis.CountUpButton = CountUpButton;

const firstCountUp = new CountUpButton({
  count: 3,
}); */

//# --------------------------------------------------------------------------
//# JavaScript 프로그래밍 패러다임
//# → 클래스(class)를 사용해 구현합니다. (참고: https://mzl.la/3QrTKlF)

//# 붕어빵 틀(생성자함수: 클래스)

class CounterButton {
  #element = null;
  #config = {};
  #updateCallback = null;
  #clearIntervalId = 0;

  static defaultOptions = {
    count: 0,
    step: 1,
  }

  constructor(element, props = {}) {
    if (!element) {
      throw new Error('element가 문서에 존재하지 않습니다.');
    }

    this.#element = element;
    this.#init(props);
  }

  #init(props) {
    this.setConfig(props);
    this.#updateDOM();
    this.#bindEvent();
  }

  #bindEvent() {
    this.#element.addEventListener('click', () => {
      this.setCount();
      this.#updateCallback?.(this.#config.count);
    });
  }

  #updateDOM() {
    const { count } = this.#config;
    this.#element.textContent = count;
  }

  setConfig(userConfig = {}) {
    this.#config = { ...CounterButton.defaultOptions, ...userConfig };
  }

  setCount(newCount) {
    const { count, step } = this.#config;

    this.setConfig({
      ...this.#config,
      count: newCount ?? count + step,
    });

    this.#updateDOM();
  }

  update(callback) {
    this.#updateCallback = callback;
  }

  play(fps = 1000 / 1) {
    this.#clearIntervalId = setInterval(() => {
      const { count, step } = this.#config;
      this.setCount(count + step);
      this.#updateDOM();
    }, fps);
  }

  stop() {
    clearInterval(this.#clearIntervalId);
  }

  mount(container) {
    container.append(this.#element);
  }
}

const counterButton = new CounterButton(
  document.createElement('button'),
  {
    count: 2,
    step: 2
  }
);

counterButton.update((count) => {
  document.querySelector('.object-oriented').textContent = String(count);
})

counterButton.mount(document.getElementById('demo'));


//# --------------------------------------------------------------------------
//# 웹 컴포넌트(Web Components) API
//# → 웹 컴포넌트를 사용해 구현합니다. (참고: https://mzl.la/3YjFdu9)

class CounterButtonComponent extends HTMLElement {
  #config = {
    count: 0,
    step: 1,
  }

  constructor() {
    super();
    this.#init();
  }

  #init() {
    const userConfig = {
      count: Number(this.getAttribute('count')),
      step: Number(this.getAttribute('step')) || 1,
    };

    this.#config = { ...this.#config, ...userConfig };
  }

  #bindEvent(e) {
    if (e.target.matches('button')) {
      this.#setCount();
      this.render();
      // 참고: https://developer.mozilla.org/ko/docs/Web/Events/Creating_and_triggering_events
      this.dispatchEvent(new CustomEvent('update', { detail: {
        count: this.#config.count
      } }));
    }
  }

  #setCount() {
    const { count, step } = this.#config;
    this.#config.count = count + step;
  }

  connectedCallback() {
    // console.log('connected');
    this.render();
    this.addEventListener('click', (e) => this.#bindEvent(e));
  }

  disconnectedCallback() {
    // console.log('disconnected');
    this.removeEventListener('click', (e) => this.#bindEvent(e));
  }

  render() {
    const { count } = this.#config;
    this.innerHTML = `<button type="button">${count}</button>`;
  }
}

customElements.define('counter-button', CounterButtonComponent);

const counterButtonEl = document.querySelector('counter-button');

counterButtonEl.addEventListener('update', ({ detail: { count } }) => {
  document.querySelector('.web-component').textContent = String(count);
});