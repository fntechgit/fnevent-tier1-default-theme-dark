const {
  STATIC_CONTENT_DIR_PATH
} = require("@openeventkit/event-site/src/utils/filePath");

const FAQS_PAGE_FILE_PATH = `${STATIC_CONTENT_DIR_PATH}/faqs-page/index.json`;
const TERMS_PAGE_FILE_PATH = `${STATIC_CONTENT_DIR_PATH}/terms-page/index.json`;

exports.FAQS_PAGE_FILE_PATH = FAQS_PAGE_FILE_PATH;
exports.TERMS_PAGE_FILE_PATH = TERMS_PAGE_FILE_PATH;