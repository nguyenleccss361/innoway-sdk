interface DeviceInfo {
  id: string;
  name: string;
  owner: string;
  group: string;
  groupname: string;
  type: string;
  typename: string;
  status: string;
  metadata: Uint8Array | string;
  variablesList: Array<string>;
  orgid: string;
  orgname: string;
  createby: string;
  projectid: string;
  templateid: string;
  key: string;
  thingid: string;
  handlemsgsvc: string;
  additionalinfo: Uint8Array | string;
}
interface Device {
  IdentifyInfoByKey(options: { key: string }): Promise<DeviceInfo>;
}
}
declare const Device: Device.Device;
export {Device};