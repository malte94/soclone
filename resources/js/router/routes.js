import QuestionsPage from '../components/QuestionsPage.vue';
import QuestionPage from '../components/QuestionPage.vue';
import MyPostsPage from '../components/MyPostsPage.vue';
import NotFoundPage from '../components/NotFoundPage.vue';
import CreateQuestionPage from '../components/CreateQuestionPage.vue'
import EditQuestionPage from '../components/EditQuestionPage.vue'

const routes = [
    {
        path: '/',
        component: QuestionsPage,
        name: 'home'
    },
    {
        path: '/questions',
        component: QuestionsPage,
        name: 'questions'
    },
    {
        path: '/questions/create',
        component: CreateQuestionPage,
        name: 'questions.create'
    },
    {
        path: '/questions/:id/edit', 
        component: EditQuestionPage,
        name: 'questions.edit'
    },
    {
        path: '/home',
        component: MyPostsPage,
        name: 'my-posts',
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/questions/:slug', 
        component: QuestionPage,
        name: 'questions.show',
        props: true
    },
    {
        path: '*',
        component: NotFoundPage
    }
]

export default routes