'use server'

import { revalidatePath } from "next/cache";
import { ConnectToCollection } from "../dataBase"
import { ObjectId } from "mongodb";

export async function DeleteTimeAction(formData: FormData) {
      const timeId = formData.get("timeId") as string;
      const TimesCollection = await ConnectToCollection("Times")
      try {
            // delete time
            const result = await TimesCollection.deleteOne({_id: new ObjectId(timeId)});
            revalidatePath("/dashboard/admin/Times")

      } catch(err) {
            console.log(err)
      }
}