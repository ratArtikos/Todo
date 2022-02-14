import React from 'react';
import s from './HomePage.module.css'

const HomePage = () => {
    return <div className={s.content}>
        <p>Todo List – это список дел, которые вам нужно выполнить или того, что вы хотите сделать.</p>
        <p>Традиционно их пишут на листке бумаги и организовывают в порядке приоритета. При выполнении задачи, её обычно вычеркивают из списка.</p>
        <p> Но ведь гораздо проще вести этот список в электронном виде... Для этого нажмите на вкладку todo, чтобы начать :)</p>
    </div>
}

export default HomePage;