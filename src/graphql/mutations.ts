/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createMessageActions = /* GraphQL */ `
  mutation CreateMessageActions(
    $input: CreateMessageActionsInput!
    $condition: ModelMessageActionsConditionInput
  ) {
    createMessageActions(input: $input, condition: $condition) {
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
export const updateMessageActions = /* GraphQL */ `
  mutation UpdateMessageActions(
    $input: UpdateMessageActionsInput!
    $condition: ModelMessageActionsConditionInput
  ) {
    updateMessageActions(input: $input, condition: $condition) {
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
export const deleteMessageActions = /* GraphQL */ `
  mutation DeleteMessageActions(
    $input: DeleteMessageActionsInput!
    $condition: ModelMessageActionsConditionInput
  ) {
    deleteMessageActions(input: $input, condition: $condition) {
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
export const createSingleChats = /* GraphQL */ `
  mutation CreateSingleChats(
    $input: CreateSingleChatsInput!
    $condition: ModelSingleChatsConditionInput
  ) {
    createSingleChats(input: $input, condition: $condition) {
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
export const updateSingleChats = /* GraphQL */ `
  mutation UpdateSingleChats(
    $input: UpdateSingleChatsInput!
    $condition: ModelSingleChatsConditionInput
  ) {
    updateSingleChats(input: $input, condition: $condition) {
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
export const deleteSingleChats = /* GraphQL */ `
  mutation DeleteSingleChats(
    $input: DeleteSingleChatsInput!
    $condition: ModelSingleChatsConditionInput
  ) {
    deleteSingleChats(input: $input, condition: $condition) {
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
export const createChats = /* GraphQL */ `
  mutation CreateChats(
    $input: CreateChatsInput!
    $condition: ModelChatsConditionInput
  ) {
    createChats(input: $input, condition: $condition) {
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
export const updateChats = /* GraphQL */ `
  mutation UpdateChats(
    $input: UpdateChatsInput!
    $condition: ModelChatsConditionInput
  ) {
    updateChats(input: $input, condition: $condition) {
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
export const deleteChats = /* GraphQL */ `
  mutation DeleteChats(
    $input: DeleteChatsInput!
    $condition: ModelChatsConditionInput
  ) {
    deleteChats(input: $input, condition: $condition) {
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
export const createSeenMessages = /* GraphQL */ `
  mutation CreateSeenMessages(
    $input: CreateSeenMessagesInput!
    $condition: ModelSeenMessagesConditionInput
  ) {
    createSeenMessages(input: $input, condition: $condition) {
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
export const updateSeenMessages = /* GraphQL */ `
  mutation UpdateSeenMessages(
    $input: UpdateSeenMessagesInput!
    $condition: ModelSeenMessagesConditionInput
  ) {
    updateSeenMessages(input: $input, condition: $condition) {
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
export const deleteSeenMessages = /* GraphQL */ `
  mutation DeleteSeenMessages(
    $input: DeleteSeenMessagesInput!
    $condition: ModelSeenMessagesConditionInput
  ) {
    deleteSeenMessages(input: $input, condition: $condition) {
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
export const createMessages = /* GraphQL */ `
  mutation CreateMessages(
    $input: CreateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    createMessages(input: $input, condition: $condition) {
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
export const updateMessages = /* GraphQL */ `
  mutation UpdateMessages(
    $input: UpdateMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    updateMessages(input: $input, condition: $condition) {
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
export const deleteMessages = /* GraphQL */ `
  mutation DeleteMessages(
    $input: DeleteMessagesInput!
    $condition: ModelMessagesConditionInput
  ) {
    deleteMessages(input: $input, condition: $condition) {
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
export const createUnreadMessages = /* GraphQL */ `
  mutation CreateUnreadMessages(
    $input: CreateUnreadMessagesInput!
    $condition: ModelUnreadMessagesConditionInput
  ) {
    createUnreadMessages(input: $input, condition: $condition) {
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
export const updateUnreadMessages = /* GraphQL */ `
  mutation UpdateUnreadMessages(
    $input: UpdateUnreadMessagesInput!
    $condition: ModelUnreadMessagesConditionInput
  ) {
    updateUnreadMessages(input: $input, condition: $condition) {
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
export const deleteUnreadMessages = /* GraphQL */ `
  mutation DeleteUnreadMessages(
    $input: DeleteUnreadMessagesInput!
    $condition: ModelUnreadMessagesConditionInput
  ) {
    deleteUnreadMessages(input: $input, condition: $condition) {
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
export const createWorkspaces = /* GraphQL */ `
  mutation CreateWorkspaces(
    $input: CreateWorkspacesInput!
    $condition: ModelWorkspacesConditionInput
  ) {
    createWorkspaces(input: $input, condition: $condition) {
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
export const updateWorkspaces = /* GraphQL */ `
  mutation UpdateWorkspaces(
    $input: UpdateWorkspacesInput!
    $condition: ModelWorkspacesConditionInput
  ) {
    updateWorkspaces(input: $input, condition: $condition) {
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
export const deleteWorkspaces = /* GraphQL */ `
  mutation DeleteWorkspaces(
    $input: DeleteWorkspacesInput!
    $condition: ModelWorkspacesConditionInput
  ) {
    deleteWorkspaces(input: $input, condition: $condition) {
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
export const createDeliveredMessages = /* GraphQL */ `
  mutation CreateDeliveredMessages(
    $input: CreateDeliveredMessagesInput!
    $condition: ModelDeliveredMessagesConditionInput
  ) {
    createDeliveredMessages(input: $input, condition: $condition) {
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
export const updateDeliveredMessages = /* GraphQL */ `
  mutation UpdateDeliveredMessages(
    $input: UpdateDeliveredMessagesInput!
    $condition: ModelDeliveredMessagesConditionInput
  ) {
    updateDeliveredMessages(input: $input, condition: $condition) {
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
export const deleteDeliveredMessages = /* GraphQL */ `
  mutation DeleteDeliveredMessages(
    $input: DeleteDeliveredMessagesInput!
    $condition: ModelDeliveredMessagesConditionInput
  ) {
    deleteDeliveredMessages(input: $input, condition: $condition) {
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
export const createUsers = /* GraphQL */ `
  mutation CreateUsers(
    $input: CreateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    createUsers(input: $input, condition: $condition) {
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
export const updateUsers = /* GraphQL */ `
  mutation UpdateUsers(
    $input: UpdateUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    updateUsers(input: $input, condition: $condition) {
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
export const deleteUsers = /* GraphQL */ `
  mutation DeleteUsers(
    $input: DeleteUsersInput!
    $condition: ModelUsersConditionInput
  ) {
    deleteUsers(input: $input, condition: $condition) {
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
