import { ArticleSourcePageProps } from "modules/Article/components/ArticleSourcePage/types.ts"

const ArticleSourcePage = ({ link }: ArticleSourcePageProps) => {
  return (
    <div>
      <iframe src={link} height={500} width='100%' />
    </div>
  )
}

export default ArticleSourcePage