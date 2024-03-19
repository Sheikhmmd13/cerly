"use server"

import { ObjectId } from "mongodb"
import { CloseConnection, ConnectToCollection } from "../dataBase";

export async function DeleteService(formData: FormData) {
      console.log('deleting service')
      const serviceId = new ObjectId(formData.get("serviceId") as string);
      const ServiceCollection = await ConnectToCollection("services");

      try {
            await ServiceCollection.deleteOne({_id: serviceId});
      } catch(err) {
            console.log(err)
      } finally {
            CloseConnection();
      }
}