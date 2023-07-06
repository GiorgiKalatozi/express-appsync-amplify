/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessageActions = /* GraphQL */ `
  subscription OnCreateMessageActions(
    $filter: ModelSubscriptionMessageActionsFilterInput
  ) {
    onCreateMessageActions(filter: $filter) {
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
export const onUpdateMessageActions = /* GraphQL */ `
  subscription OnUpdateMessageActions(
    $filter: ModelSubscriptionMessageActionsFilterInput
  ) {
    onUpdateMessageActions(filter: $filter) {
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
export const onDeleteMessageActions = /* GraphQL */ `
  subscription OnDeleteMessageActions(
    $filter: ModelSubscriptionMessageActionsFilterInput
  ) {
    onDeleteMessageActions(filter: $filter) {
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
export const onCreateSingleChats = /* GraphQL */ `
  subscription OnCreateSingleChats(
    $filter: ModelSubscriptionSingleChatsFilterInput
  ) {
    onCreateSingleChats(filter: $filter) {
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
export const onUpdateSingleChats = /* GraphQL */ `
  subscription OnUpdateSingleChats(
    $filter: ModelSubscriptionSingleChatsFilterInput
  ) {
    onUpdateSingleChats(filter: $filter) {
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
export const onDeleteSingleChats = /* GraphQL */ `
  subscription OnDeleteSingleChats(
    $filter: ModelSubscriptionSingleChatsFilterInput
  ) {
    onDeleteSingleChats(filter: $filter) {
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
export const onCreateChats = /* GraphQL */ `
  subscription OnCreateChats($filter: ModelSubscriptionChatsFilterInput) {
    onCreateChats(filter: $filter) {
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
export const onUpdateChats = /* GraphQL */ `
  subscription OnUpdateChats($filter: ModelSubscriptionChatsFilterInput) {
    onUpdateChats(filter: $filter) {
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
export const onDeleteChats = /* GraphQL */ `
  subscription OnDeleteChats($filter: ModelSubscriptionChatsFilterInput) {
    onDeleteChats(filter: $filter) {
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
export const onCreateSeenMessages = /* GraphQL */ `
  subscription OnCreateSeenMessages(
    $filter: ModelSubscriptionSeenMessagesFilterInput
  ) {
    onCreateSeenMessages(filter: $filter) {
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
export const onUpdateSeenMessages = /* GraphQL */ `
  subscription OnUpdateSeenMessages(
    $filter: ModelSubscriptionSeenMessagesFilterInput
  ) {
    onUpdateSeenMessages(filter: $filter) {
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
export const onDeleteSeenMessages = /* GraphQL */ `
  subscription OnDeleteSeenMessages(
    $filter: ModelSubscriptionSeenMessagesFilterInput
  ) {
    onDeleteSeenMessages(filter: $filter) {
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
export const onCreateMessages = /* GraphQL */ `
  subscription OnCreateMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onCreateMessages(filter: $filter) {
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
export const onUpdateMessages = /* GraphQL */ `
  subscription OnUpdateMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onUpdateMessages(filter: $filter) {
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
export const onDeleteMessages = /* GraphQL */ `
  subscription OnDeleteMessages($filter: ModelSubscriptionMessagesFilterInput) {
    onDeleteMessages(filter: $filter) {
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
export const onCreateUnreadMessages = /* GraphQL */ `
  subscription OnCreateUnreadMessages(
    $filter: ModelSubscriptionUnreadMessagesFilterInput
  ) {
    onCreateUnreadMessages(filter: $filter) {
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
export const onUpdateUnreadMessages = /* GraphQL */ `
  subscription OnUpdateUnreadMessages(
    $filter: ModelSubscriptionUnreadMessagesFilterInput
  ) {
    onUpdateUnreadMessages(filter: $filter) {
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
export const onDeleteUnreadMessages = /* GraphQL */ `
  subscription OnDeleteUnreadMessages(
    $filter: ModelSubscriptionUnreadMessagesFilterInput
  ) {
    onDeleteUnreadMessages(filter: $filter) {
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
export const onCreateWorkspaces = /* GraphQL */ `
  subscription OnCreateWorkspaces(
    $filter: ModelSubscriptionWorkspacesFilterInput
  ) {
    onCreateWorkspaces(filter: $filter) {
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
export const onUpdateWorkspaces = /* GraphQL */ `
  subscription OnUpdateWorkspaces(
    $filter: ModelSubscriptionWorkspacesFilterInput
  ) {
    onUpdateWorkspaces(filter: $filter) {
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
export const onDeleteWorkspaces = /* GraphQL */ `
  subscription OnDeleteWorkspaces(
    $filter: ModelSubscriptionWorkspacesFilterInput
  ) {
    onDeleteWorkspaces(filter: $filter) {
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
export const onCreateDeliveredMessages = /* GraphQL */ `
  subscription OnCreateDeliveredMessages(
    $filter: ModelSubscriptionDeliveredMessagesFilterInput
  ) {
    onCreateDeliveredMessages(filter: $filter) {
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
export const onUpdateDeliveredMessages = /* GraphQL */ `
  subscription OnUpdateDeliveredMessages(
    $filter: ModelSubscriptionDeliveredMessagesFilterInput
  ) {
    onUpdateDeliveredMessages(filter: $filter) {
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
export const onDeleteDeliveredMessages = /* GraphQL */ `
  subscription OnDeleteDeliveredMessages(
    $filter: ModelSubscriptionDeliveredMessagesFilterInput
  ) {
    onDeleteDeliveredMessages(filter: $filter) {
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
export const onCreateUsers = /* GraphQL */ `
  subscription OnCreateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onCreateUsers(filter: $filter) {
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
export const onUpdateUsers = /* GraphQL */ `
  subscription OnUpdateUsers($filter: ModelSubscriptionUsersFilterInput) {
    onUpdateUsers(filter: $filter) {
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
export const onDeleteUsers = /* GraphQL */ `
  subscription OnDeleteUsers($filter: ModelSubscriptionUsersFilterInput) {
    onDeleteUsers(filter: $filter) {
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
