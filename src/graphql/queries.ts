/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessageActions = /* GraphQL */ `
  query GetMessageActions($id: ID!) {
    getMessageActions(id: $id) {
      id
      action
      user_id
      message_id
      message_owner
      created_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMessageActions = /* GraphQL */ `
  query ListMessageActions(
    $filter: ModelMessageActionsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessageActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        action
        user_id
        message_id
        message_owner
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessageActions = /* GraphQL */ `
  query SyncMessageActions(
    $filter: ModelMessageActionsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessageActions(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        action
        user_id
        message_id
        message_owner
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSingleChats = /* GraphQL */ `
  query GetSingleChats($id: ID!) {
    getSingleChats(id: $id) {
      id
      user_id
      chat_id
      owner_id
      workspace_id
      is_initial
      title_initials
      color
      muted_until
      type
      last_messag {
        content
        sender_id
        created_at
        status
        users_seen
        __typename
      }
      chat_members
      is_admin
      is_active
      created_at
      title {
        id
        email
        first_name
        last_name
        full_name
        color
        initials
        position
        birthday
        text_status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      singleChatsTitleId
      __typename
    }
  }
`;
export const listSingleChats = /* GraphQL */ `
  query ListSingleChats(
    $filter: ModelSingleChatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSingleChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        chat_id
        owner_id
        workspace_id
        is_initial
        title_initials
        color
        muted_until
        type
        chat_members
        is_admin
        is_active
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        singleChatsTitleId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSingleChats = /* GraphQL */ `
  query SyncSingleChats(
    $filter: ModelSingleChatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSingleChats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_id
        chat_id
        owner_id
        workspace_id
        is_initial
        title_initials
        color
        muted_until
        type
        chat_members
        is_admin
        is_active
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        singleChatsTitleId
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getChats = /* GraphQL */ `
  query GetChats($id: ID!) {
    getChats(id: $id) {
      id
      user_id
      chat_id
      owner_id
      workspace_id
      is_initial
      title
      title_initials
      color
      muted_until
      type
      last_message {
        content
        sender_id
        created_at
        status
        users_seen
        __typename
      }
      chat_members
      is_admin
      is_active
      created_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listChats = /* GraphQL */ `
  query ListChats(
    $filter: ModelChatsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        user_id
        chat_id
        owner_id
        workspace_id
        is_initial
        title
        title_initials
        color
        muted_until
        type
        chat_members
        is_admin
        is_active
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncChats = /* GraphQL */ `
  query SyncChats(
    $filter: ModelChatsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        user_id
        chat_id
        owner_id
        workspace_id
        is_initial
        title
        title_initials
        color
        muted_until
        type
        chat_members
        is_admin
        is_active
        created_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getSeenMessages = /* GraphQL */ `
  query GetSeenMessages($id: ID!) {
    getSeenMessages(id: $id) {
      id
      message_id
      seener_id
      owner_id
      seen_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listSeenMessages = /* GraphQL */ `
  query ListSeenMessages(
    $filter: ModelSeenMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeenMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message_id
        seener_id
        owner_id
        seen_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncSeenMessages = /* GraphQL */ `
  query SyncSeenMessages(
    $filter: ModelSeenMessagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncSeenMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        message_id
        seener_id
        owner_id
        seen_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getMessages = /* GraphQL */ `
  query GetMessages($id: ID!) {
    getMessages(id: $id) {
      id
      message_id
      chat_id
      user_id
      workspace_id
      is_initial
      initiator_id
      content
      status
      hidden
      forwarded_from
      attachment
      replied_to
      created_at
      updated_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message_id
        chat_id
        user_id
        workspace_id
        is_initial
        initiator_id
        content
        status
        hidden
        forwarded_from
        attachment
        replied_to
        created_at
        updated_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncMessages = /* GraphQL */ `
  query SyncMessages(
    $filter: ModelMessagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        message_id
        chat_id
        user_id
        workspace_id
        is_initial
        initiator_id
        content
        status
        hidden
        forwarded_from
        attachment
        replied_to
        created_at
        updated_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUnreadMessages = /* GraphQL */ `
  query GetUnreadMessages($id: ID!) {
    getUnreadMessages(id: $id) {
      id
      message_id
      chat_id
      user_id
      workspace_id
      is_initial
      initiator_id
      content
      status
      hidden
      forwarded_from
      attachment
      replied_to
      created_at
      updated_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUnreadMessages = /* GraphQL */ `
  query ListUnreadMessages(
    $filter: ModelUnreadMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUnreadMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        message_id
        chat_id
        user_id
        workspace_id
        is_initial
        initiator_id
        content
        status
        hidden
        forwarded_from
        attachment
        replied_to
        created_at
        updated_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUnreadMessages = /* GraphQL */ `
  query SyncUnreadMessages(
    $filter: ModelUnreadMessagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUnreadMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        message_id
        chat_id
        user_id
        workspace_id
        is_initial
        initiator_id
        content
        status
        hidden
        forwarded_from
        attachment
        replied_to
        created_at
        updated_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getWorkspaces = /* GraphQL */ `
  query GetWorkspaces($id: ID!) {
    getWorkspaces(id: $id) {
      id
      name
      slug
      workspace_users
      address {
        address
        city
        country_id
        country
        state
        zip_code
        __typename
      }
      email
      working_hours {
        from
        to
        time_format
        __typename
      }
      phone {
        phone_number
        prefix_id
        prefix
        prefix_country_initials
        __typename
      }
      image {
        small
        medium
        large
        x_large
        __typename
      }
      company_birthday
      description
      website_address
      industry {
        id
        name
        __typename
      }
      number_of_employees {
        id
        quantity
        __typename
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listWorkspaces = /* GraphQL */ `
  query ListWorkspaces(
    $filter: ModelWorkspacesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWorkspaces(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slug
        workspace_users
        email
        company_birthday
        description
        website_address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncWorkspaces = /* GraphQL */ `
  query SyncWorkspaces(
    $filter: ModelWorkspacesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWorkspaces(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        slug
        workspace_users
        email
        company_birthday
        description
        website_address
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getDeliveredMessages = /* GraphQL */ `
  query GetDeliveredMessages($id: ID!) {
    getDeliveredMessages(id: $id) {
      id
      message_id
      deliverer_id
      owner_id
      delivered_at
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listDeliveredMessages = /* GraphQL */ `
  query ListDeliveredMessages(
    $filter: ModelDeliveredMessagesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeliveredMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        message_id
        deliverer_id
        owner_id
        delivered_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncDeliveredMessages = /* GraphQL */ `
  query SyncDeliveredMessages(
    $filter: ModelDeliveredMessagesFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncDeliveredMessages(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        message_id
        deliverer_id
        owner_id
        delivered_at
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const getUsers = /* GraphQL */ `
  query GetUsers($id: ID!) {
    getUsers(id: $id) {
      id
      email
      first_name
      last_name
      full_name
      avatar {
        small
        medium
        large
        x_large
        __typename
      }
      color
      initials
      position
      birthday
      phone {
        phone_number
        prefix_id
        prefix
        prefix_country_initials
        __typename
      }
      location {
        address
        city
        country_id
        country
        state
        zip_code
        __typename
      }
      timezone {
        id
        name
        __typename
      }
      text_status
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        first_name
        last_name
        full_name
        color
        initials
        position
        birthday
        text_status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        email
        first_name
        last_name
        full_name
        color
        initials
        position
        birthday
        text_status
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        __typename
      }
      nextToken
      startedAt
      __typename
    }
  }
`;
