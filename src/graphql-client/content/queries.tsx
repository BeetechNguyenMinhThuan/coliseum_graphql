import { gql } from "@/__generated__";

export const SLIDE_BANER = gql(`
query SlideBanner($type: Int!) {
  contentsBanner(type: $type) {
    content_url
    destination_url
  }
}
`);

export const NOTIFYCATION = gql(`
query ContentsNoti($type: Int!) {
  contentsNoti(type: $type) {
    title
    content_url
    destination_url
    information_type
    content
    publication_start_at
    information_type
  }
}
`);

export const ADVERTISEMENT = gql(`
query ContentsAdvertisement($type: Int!) {
  contentsAdvertisement(type: $type) {
    content_url
    destination_url
  }
}`);
