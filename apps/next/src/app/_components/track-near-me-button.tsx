import { useState } from "react";
import { IconLocation } from "@tabler/icons-react";

import { useShallow } from "@ubus/stores";
import { useMapStore } from "@ubus/stores/map-store";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@ubus/ui/alert-dialog";
import { Button } from "@ubus/ui/button-custom";

export const TrackNearMeButton = () => {
  const { updateUserGeoLocation, isLoading, consent } = useMapStore(
    useShallow((state) => ({
      updateUserGeoLocation: state.updateUserGeoLocation,
      isLoading: state.isLoading,
      consent: state.consent,
    })),
  );

  const [openConsentDialog, setOpenConsentDialog] = useState(false);

  const handleConsent = (value: boolean) => {
    if (value) {
      updateUserGeoLocation();
    }
    setOpenConsentDialog(false);
  };

  const showConsentDialog = () => {
    if (consent === null) {
      setOpenConsentDialog(true);
    } else {
      updateUserGeoLocation();
    }
  };

  return (
    <>
      <Button
        onClick={updateUserGeoLocation}
        disabled={isLoading}
        variant="outline"
        className="gap-1.5 rounded-r-none bg-black/10 backdrop-blur-md dark:bg-white/30"
        size="sm"
      >
        <IconLocation size={14} />
        <span className="hidden sm:block">Track near me</span>
      </Button>

      <AlertDialog open={openConsentDialog} onOpenChange={setOpenConsentDialog}>
        <AlertDialogContent className="z-[99999999999]">
          <AlertDialogHeader>
            <AlertDialogTitle>Cookie Consent</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            We need your location to improve the experience. Do you allow us to
            use your location data?
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogAction
              onClick={() => handleConsent(true)}
              className="bg-green-500"
            >
              Yes
            </AlertDialogAction>
            <AlertDialogCancel
              onClick={() => handleConsent(false)}
              className="bg-red-500"
            >
              No
            </AlertDialogCancel>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};
