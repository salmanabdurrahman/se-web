import { Xendit } from "xendit-node";
import { xenditApiKey } from "@/constants/app-config";

const xenditClient = new Xendit({
  secretKey: xenditApiKey,
});

export default xenditClient;
