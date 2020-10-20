import defaultSettings from '@/settings'

const title = defaultSettings.title || 'cecloud admin template'

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}
