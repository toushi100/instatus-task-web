import client from "../axios/api";

type ApiCommonParams = {
  [key: string]: any;
};

type CreateEventParams = {
  actor_name: String;
  group: String;
  action_name: String;
  target_name: String;
  location: String;
  metadata_redirect: String;
  metadata_description: String;
};

export function index(commonApiParams?: ApiCommonParams) {
  const params = commonApiParams || {};

  return client.get("/events", { params: params });
}

export function create(createEventParams: CreateEventParams) {
  const {
    actor_name,
    group,
    action_name,
    target_name,
    location,
    metadata_redirect,
    metadata_description,
  } = createEventParams;
  return client.post("/events", {
    actor_name,
    group,
    action_name,
    target_name,
    location,
    metadata_redirect,
    metadata_description,
  });
}
