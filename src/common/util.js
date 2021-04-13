import { flow } from 'lodash'
import marked from 'marked'
import DOMPurify from 'dompurify'

// 将 markdown 格式到文本转换为 HTML
// 同时去掉不安全到内容
export const formatContent = flow(marked, DOMPurify.sanitize)

export const changeTheme = (theme) => {
  const link = document.createElement('link')
  link.onload = () => {
    document.head.removeChild(oldLink)
    link.setAttribute('id', 'theme')
    link.onload = null
  }
  link.rel = 'stylesheet'
  link.href = `https://unpkg.com/bulmaswatch/${theme}/bulmaswatch.min.css`
  const oldLink = document.getElementById('theme')
  document.head.insertBefore(link, oldLink)
}
