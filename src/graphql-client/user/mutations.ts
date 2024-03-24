import { gql } from "@/__generated__/gql";

export const SINGLE_UPLOAD = gql(`
mutation SingleUpload($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
      buffer
    }
  }
`);
