import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        About me
        <br />
        李佳恩 Jia-en Lee (kaonlee)
      </h1>
      <div className="space-y-4">
        <p>嗨，我是佳恩，一位圖書資訊學出身的小小前端工程師。</p>
        <p>喜歡美好的事物：自由、小熊貓、波加曼。</p>
        <p>在這裡，我將記錄我的生活和學習。希望能為你帶來樂趣或幫助。</p>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
