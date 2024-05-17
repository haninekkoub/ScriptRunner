import {
  singletonDocumentListItems,
  filteredDocumentListItems,
} from "sanity-plugin-singleton-tools";

export const structure = (S, context) =>
  S.list()
    .title("Sanity Love Content")
    .items([
        // Create a list item for each singleton document in your schema that links directly to a document view
        ...singletonDocumentListItems({ S, context }),
        
      S.divider(),
      // Filter singleton documents out of the default S.documentTypeListItems() to prevent them from being rendered as lists or as duplicates
      ...filteredDocumentListItems({ S, context }),
    ]);
